#!/bin/bash
# Setup script for Mahendram Landmark assets
set -e

PROJECT_DIR="/home/zafar-farooque/Desktop/Mahendram Landmark Tracker"
LOGOS_SRC="/home/zafar-farooque/Downloads/logos"
FM_IMG="/home/zafar-farooque/.gemini/antigravity/brain/15140b34-30d2-4d7a-b767-a7deb8004a91/ortus_facility_management_1781945863116.png"

echo "Creating logos directory..."
mkdir -p "$PROJECT_DIR/public/logos"

echo "Copying logos..."
cp "$LOGOS_SRC"/*.png "$PROJECT_DIR/public/logos/"
echo "Logos copied: $(ls "$PROJECT_DIR/public/logos/" | wc -l) files"

echo "Copying Ortus Apex FM image..."
cp "$FM_IMG" "$PROJECT_DIR/public/ortus_facility_management.png"

echo "All done!"
ls "$PROJECT_DIR/public/logos/"
