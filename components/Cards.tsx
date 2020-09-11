import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { ICards } from '../interfaces'

const useStyle = makeStyles({
    card: {
        background: '#21263C'
    }
})



const Cards = ({ cardText, data }: ICards) => {
    const classes = useStyle()

    return (
        <>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="body1">
                        {cardText}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant="body1">
                        {typeof data === 'number' ? data * 2 : 0}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}


export default Cards;