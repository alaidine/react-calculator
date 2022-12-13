import '../index.css'

var buttonsClicked: string[] = []

function solve(equation: string[]): string {
    const operations = ["E", "+", "*", "-", "/", "="]
    const lastButtonClicked = equation[equation.length -1]

    var solvedEquation
    if (!operations.includes(lastButtonClicked)) solvedEquation = eval(equation.join(""))

    return solvedEquation 
}

function updateContent(input: any) {
    const container = document.getElementById('container')

    console.log(`Button ${input} pressed`)

    switch (input) {
        case "E":
            container.innerText = ""
            buttonsClicked = [""]
            break

        case "=":
            container.innerText = ""
            buttonsClicked.pop()
            container.innerText = solve(buttonsClicked)
            buttonsClicked = []
            break

        default:
            container.innerText = buttonsClicked.join("")
    }
}

function Button(props: any) {
    const HandleClick = () => {
        const buttonClicked = props.text

        buttonsClicked.push(buttonClicked)

        var solution = solve(buttonsClicked)

        console.log(buttonsClicked)
        console.log(solution)

        // update the content of the div that show the value of the buttons
        updateContent(buttonClicked)
    }

    return (
        <button onClick={HandleClick} className="button">{props.text}</button>
    )
}

export default Button;
