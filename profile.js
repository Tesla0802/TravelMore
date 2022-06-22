file.addEventListener("change", function () {
    const chooseFile = this.files[0];
    if (chooseFile) {
      const reader = new FileReader();
  
      reader.addEventListener("load", function () {
        img.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(chooseFile);
    }
  });
  