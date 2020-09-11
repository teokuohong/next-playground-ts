import Layout from '../components/Layout'
import Cards from '../components/Cards';
import DataTable from '../components/Table';
import { Grid } from '@material-ui/core';

const ClassPage = () => {

  let cardsItem: JSX.Element[] = [
    {
      cardText: "Total Teaching Classes:",
      data: 0 //To Get From API
    },
    {
      cardText: "Total Teaching Hours:",
      data: 0 //To Get From API
    }
  ].map((card, index) => {
    return (
      <Grid key={"class-card-" + index} item xs={12} sm={6}>
        <Cards key={'card' + index} cardText={card.cardText} data={card.data} ></Cards>
      </Grid>

    )
  })

  return (
    <Layout title="React Version of My FYP">
      <Grid container spacing={3}>
        {cardsItem}
      </Grid>
      <DataTable />
    </Layout>
  )
}

export default ClassPage
