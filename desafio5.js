const usuarios = [
    {Nome: "Rodrigo", Tecnologias: ["JS", "Python", ] },
    {Nome: "Jaliel", Tecnologias: ["C++", "JS", ] },
    {Nome: "Lucas", Tecnologias: ["Angular", "C", ] },
]

for(let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].Nome} trabalha com ${usuarios[i].Tecnologias}`)
}