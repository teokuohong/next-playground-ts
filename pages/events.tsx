import Layout from "../components/Layout";
import { Grid } from "@material-ui/core";
import Cards from "../components/Cards";
import DataTable from "../components/Table";

const EventsPage = () => {

    let cardsItem: JSX.Element[] = [
        {
            cardText: "Total Number of Events",
            data: 0 //To Get From API
        }
    ].map((item, index) => {
        return (
            <Grid item xs={12}>
                <Cards key={"events-" + index} cardText={item.cardText} data={item.data}></Cards>
            </Grid>
        )
    })

    return (
        <Layout title="React Version of My FYP">
            <Grid container>
                {cardsItem}
            </Grid>
            <DataTable />
        </Layout>
    )
}

export default EventsPage