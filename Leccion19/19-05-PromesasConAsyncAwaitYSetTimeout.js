async function funcionConPromesaAwaitTimeout()
{
    let miPromesa = new Promise(resolved => {
        setTimeout(()=>resolved('promesa con await y timeout'), 3000);
    });

    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();