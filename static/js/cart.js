var updateBtns = document.getElementsByClassName('update-cart')

for (var i=0; i < updateBtns.length; i++)
{
    updateBtns[i].addEventListener('click', function()
       {
            var productId = this.dataset.product
            var action = this.dataset.action
            console.log(productId, action, user)

            if (user=='AnonymousUser')
            {
                console.log('Please')
            }
            else
            {
                updateUserOrder(productId, action)
            }
       })
}

function updateUserOrder(productId, action)
{
    console.log('User logged in')

    var url = '/update_Item/'

    fetch(url,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body:JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response) => {
        return response.json()
    })

    .then((data) =>{
        location.reload()
    })
}