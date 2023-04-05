import Head from 'next/head';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Head>
        <title>Books Store &amp; Coffee</title>
        <meta name="description" content="Welcome to Books Store &amp; Coffee" />
        <link rel="icon" href="/favicon.ico" />
        <p></p>
      </Head>

      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h2" className={classes.title}>
            Books Store &amp; Coffee
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.description}>
            Welcome to our online store where you can buy your favorite books and enjoy a cup of coffee at the same time.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" className={classes.button}>
            <Link href="/books" color="inherit">
              View Books
            </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link href="/coffee" color="inherit">
              View Coffee
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
