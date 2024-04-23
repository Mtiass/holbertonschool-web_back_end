export default function returnHowManyArguments(...args) {
    let arg_con = 0;

    for (let arg of args) {
        arg_con += 1;
    }

    return arg_con;
}
