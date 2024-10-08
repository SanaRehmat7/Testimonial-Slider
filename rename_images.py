import os

# Set the folder path where your images are stored
folder_path = r'C:\Users\hp\OneDrive\Desktop\Javascript Projects\Testimonials Slider'

# Get a list of all .avif files in the folder
files = [f for f in os.listdir(folder_path) if f.endswith('.avif')]

# Sort the files (optional, depending on how you want to order them)
files.sort()

# Loop through each file and rename it
for index, file_name in enumerate(files, start=1):
    # Set the new name (e.g., image1.avif, image2.avif, ...)
    new_name = f'image{index}.avif'
    
    # Construct the full old and new file paths
    old_path = os.path.join(folder_path, file_name)
    new_path = os.path.join(folder_path, new_name)
    
    # Rename the file
    os.rename(old_path, new_path)

print("Renaming complete!")
