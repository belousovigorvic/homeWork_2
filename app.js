// Объект - меню старбакс
var starBucksMenu = {
    coffee: {
        espresso: {
            small: {
                price: 150,
                size: 0.2,
                milk: false
            },
            mid: {
                price: 250,
                size: 0.33,
                milk: false
            },
            large: {
                price: 400,
                size: 0.5,
                milk: false
            }
        },
        americano: {
            small: {
                price: 150,
                size: 0.2,
                milk: false,
            },
            mid: {
                price: 250,
                size: 0.33,
                milk: false,
            },
            large: {
                price: 400,
                size: 0.5,
                milk: false,
            },
        },
        latte: {
            small: {
                price: 200,
                size: 0.2,
                milk: true,
            },
            mid: {
                price: 300,
                size: 0.33,
                milk: true,
            },
            large: {
                price: 400,
                size: 0.5,
                milk: true,
            },
        },
        cappuccino: {
            small: {
                price: 230,
                size: 0.2,
                milk: true,
            },
            mid: {
                price: 350,
                size: 0.33,
                milk: true,
            },
            large: {
                price: 450,
                size: 0.5,
                milk: true,
            },
        },
    },
    tea: {
        green: {
            small: {
                price: 100,
                size: 0.2
            },
            mid: {
                price: 150,
                size: 0.33
            },
            large: {
                price: 200,
                size: 0.5
            }
        },
        black: {
            small: {
                price: 100,
                size: 0.2
            },
            mid: {
                price: 150,
                size: 0.33
            },
            large: {
                price: 200,
                size: 0.5
            }
        },
        oolong: {
            small: {
                price: 150,
                size: 0.2
            },
            mid: {
                price: 200,
                size: 0.33
            },
            large: {
                price: 250,
                size: 0.5
            }
        },
        puer : {
            small: {
                price: 200,
                size: 0.2
            },
            mid: {
                price: 250,
                size: 0.33
            },
            large: {
                price: 300,
                size: 0.5
            }
        }
    }
}



// Принимаем заказ
alert('Hello, welcome to Starbucks!')
var coffeeOrTea = prompt('What would you like, coffee or tea?')

// Проверка, уточняем заказ
if (starBucksMenu.hasOwnProperty(coffeeOrTea) && coffeeOrTea === 'coffee') {
    var chooseCoffee = prompt('What coffee would you like? espresso, americano, latte, cappuccino')
    if (starBucksMenu.coffee.hasOwnProperty(chooseCoffee) && chooseCoffee === 'espresso' || chooseCoffee === 'americano' || chooseCoffee === 'latte' || chooseCoffee === 'cappuccino') {
        var sizeCoffee = prompt(`what size ${chooseCoffee} would you like, small, mid or large`)
        if (starBucksMenu.coffee[chooseCoffee].hasOwnProperty(sizeCoffee) && sizeCoffee === 'small' || sizeCoffee === 'mid' || sizeCoffee === 'large') {
            var sugar = confirm('add sugar?')
            if (sugar) {
                alert(`Your order ${sizeCoffee} ${chooseCoffee} with sugar, Your price ${starBucksMenu.coffee[chooseCoffee][sizeCoffee].price} som`)
            } else if (!sugar) {
                alert(`Your order ${sizeCoffee} ${chooseCoffee} sugar-free, Your price ${starBucksMenu.coffee[chooseCoffee][sizeCoffee].price} som`)
            } else {
                alert('No such drink! Try again')
            }
        } else {
            alert('No such drink! Try again')
        }
    } else {
        alert('No such drink! Try again')
    }
} else if (starBucksMenu.hasOwnProperty(coffeeOrTea) && coffeeOrTea === 'tea') {
    var chooseTea = prompt('What tea would you like? green, black, oolong, puer')
    if (starBucksMenu.tea.hasOwnProperty(chooseTea) && chooseTea === 'green' || chooseTea === 'black' || chooseTea === 'oolong' || chooseTea === 'puer') {
        var sizeTea = prompt(`what size ${chooseTea} would you like, small, mid or large`)
        if (starBucksMenu.tea[chooseTea].hasOwnProperty(sizeTea) && sizeTea === 'small' || sizeTea === 'mid' || sizeTea === 'large') {
            var sugar = confirm('add sugar?')
            if (sugar) {
                alert(`Your order ${sizeTea} ${chooseTea} tea, with sugar, Your price ${starBucksMenu.tea[chooseTea][sizeTea].price} som`)
            } else if (!sugar) {
                alert(`Your order ${sizeTea} ${chooseTea} tea, sugar-free, Your price ${starBucksMenu.tea[chooseTea][sizeTea].price} som`)
            } else {
                alert('No such drink! Try again')
            }
        } else {
            alert('No such drink! Try again')
        }
    } else {
        alert('No such drink! Try again')
    }
} else {
    alert('No such drink! Try again')
}



