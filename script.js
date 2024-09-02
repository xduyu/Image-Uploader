const imageInput = document.getElementById('image-input');
const uploadedImage = document.getElementById('uploaded-image');

imageInput.addEventListener('change', (e) => {
	const file = e.target.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		uploadedImage.src = reader.result;
	};
	reader.readAsDataURL(file);
});