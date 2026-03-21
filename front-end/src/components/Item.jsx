const Item = () => {
  return (
    <div>
      <a href="/" className="flex flex-col gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EkkbEdF4CsU_9ajQ4LzNYn2TSs1je7JEOA&s"
          alt="acomodacao"
          className="aspect-square rounded-2xl object-cover"
        />

        <h3 className="text-xl font-semibold">Casa - Florianópolis</h3>
        <p className="truncate text-gray-600">
          Sobre este espaço Apartamento no coração da Rua Augusta, próximo à Av.
          Paulista! Studio com varanda, cama casal, TV, ar-condicionado e com
          acesso a todas as áreas comúns do predio. Coração da Rua Augusta,
          proximo a restaurantes, farmácias e academias. O espaço Este lindo
          Studio conta com varanda, cama casal, TV, ar-condicionado, mesa para
          jantar e estudar, além de uma cozinha completa. Acesso do hóspede
          Hóspede tem acesso a todas as áreas comuns do prédio, sendo elas: -
          Piscina no Rooftop; - Academia; - Co-working; - Sala de Reunião; -
          Salão de Festas; - Churrasqueira; Outras observações - Horário de
          Check-in e Check-Out pode ser flexível. Mande mensagem para vermos
          disponibilidade; - Não há estacionamento no prédio, porém existe um
          estacionamento PRIVADO duas casas antes do nosso prédio
        </p>
        <p>
          <span className="font-semibold">550,00</span> por noite
        </p>
      </a>
    </div>
  );
};

export default Item;
