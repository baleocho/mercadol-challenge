export default async function ItemPage({ params }: { params: { id: string } }) {
    const item = await fetch(`https://api.mercadolibre.com/items/${params.id}`)
        .then(res => res.json() as Promise<{
            id: string;
            title: string;
            thumbnail: string;
            price: number;
            currency_id: string;
        }>
        );


    const { plain_text } = await fetch(`https://api.mercadolibre.com/items/${params.id}/description`)
        .then(res => res.json() as Promise<{
            plain_text: string
        }>
        );



    return (
        <section className="grid gap-2 py-4">
            <img src={item.thumbnail} alt={item.title} />
            <p className="font-bold">{Number(item.price).toLocaleString('es-AR', {style:'currency', currency:item.currency_id})}</p>
            <p>{item.title}</p>
            <hr />
            <p>{plain_text}</p>
        </section>
    )
}