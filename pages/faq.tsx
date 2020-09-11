import Layout from "../components/Layout";
import DataTable from "../components/Table";
import { Grid } from "@material-ui/core";
import Cards from "../components/Cards";
import { warmUp } from '../handler'

interface Props {
    testingProps?: string
}

const FaqPage = ({ testingProps }: Props) => {

    warmUp()
        .then((data) => {
            console.log(data)
        })

    let cardsItem: JSX.Element[] = [
        {
            cardText: 'Check Wrongly Answered Question Here',
            data: 'Check Button'
        },
        {
            cardText: 'Check Unanswered Question',
            data: 'Data Range Thingy'
        }
    ].map((item, index) => {
        return (
            <Grid item xs={12} sm={6}>
                <Cards key={"faq-" + index} cardText={item.cardText} data={item.data}></Cards>
            </Grid>
        )
    })

    return (
        <Layout>
            <Grid container spacing={3}>
                {cardsItem}
            </Grid>
            <DataTable />
        </Layout>
    )
}

FaqPage.getInitialProps = async () => {

    return await warmUp()
        .then((data) => {
            return { testingProps: data }
        })
}

export default FaqPage;