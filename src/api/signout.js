import useStateApp from "../store/store"
export default function SignOut() {
    useStateApp.setState({ login: false })
    localStorage.removeItem('login')
}