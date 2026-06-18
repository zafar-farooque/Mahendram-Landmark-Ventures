const { execSync } = require('child_process');

try {
  console.log('Detecting crop...');
  const detectOutput = execSync('ffmpeg -i public/lv_0_20260618184154.mp4 -t 2 -vf cropdetect -f null - 2>&1', { encoding: 'utf8' });
  const lines = detectOutput.split('\n');
  let cropStr = 'crop=1920:1080:0:0'; // fallback
  for (const line of lines) {
    const match = line.match(/(crop=\d+:\d+:\d+:\d+)/);
    if (match) {
      cropStr = match[1];
    }
  }
  console.log('Crop found: ' + cropStr);
  
  console.log('Cropping video...');
  execSync(`ffmpeg -y -i public/lv_0_20260618184154.mp4 -vf "${cropStr}" -c:v libx264 -c:a copy public/cropped_vid.mp4`, { stdio: 'inherit' });
  console.log('Video cropped successfully to public/cropped_vid.mp4');
} catch (e) {
  console.error('Error running ffmpeg:', e.message);
}
