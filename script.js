function updatebio(){
    let Name = document.getElementById("username").value;
    let Image = document.getElementById("image").value;
    let Bio = document.getElementById("bio").value;
    
    document.getElementById('un').innerHTML = Name;
    document.getElementById('src').src = Image;
    document.getElementById('b').innerHTML = Bio;
    
    // Hide input form and show profile
    document.querySelector('.input').style.display = 'none';
    document.querySelector('.profile-display').style.display = 'block';
}
