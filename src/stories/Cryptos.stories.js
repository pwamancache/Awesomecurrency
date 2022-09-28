import Cryptos from "./Cryptos.js";
 
export default {
    title: "Cryptos",
    component: Cryptos,
    args: {
        label: "CryptosJaideep"
    }
};
 
const Template = args => <Cryptos {...args} />;
 
const Standard = Template.bind({});
 
//const Disabled = Template.bind({});
//Disabled.args = {disabled: true, label: "Disabled Button"};
 
export {Standard};