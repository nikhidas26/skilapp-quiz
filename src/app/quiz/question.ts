export interface IQuestion {
    questionId: number,
    question: string
    options: [
        {string: string}
    ]
}

type option = {
    key: string,
    value: string
}