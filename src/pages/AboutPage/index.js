import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material/';
import { TopNav } from '../../components/TopNav';
import { Octokit } from 'octokit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { openInNewTab } from '../../functions/openInNewTab';
import Button from '@mui/material/Button';
export function AboutPage(props) {

    return <Box
        sx={{
            width: '100vw',
            height: "100vh",
            bgcolor: 'background.default',
            color: 'text.primary',
            overflowY: "auto",
            overflowX: "hidden",
            p: 0
        }}
    >
        <TopNav theme={props.theme} colorMode={props.colorMode} />
        <Box
            sx={{
                display: 'flex',
                width: '100vw',
                justifyContent: 'center',
            }}
        >
            <Box sx={{
                maxWidth: '90%', marginTop: "50px",
            }}>
                <Typography variant="h2" sx={{ marginBottom: "30px", width: "100%", textAlign: "center" }}>
                    About
                </Typography>
                <Box sx={{ maxWidth: "90vw", width: "800px" }}>
                    <Typography variant="p1" >
                        The site is still under construction :)
                        <Contributions />
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
}


function Contributions() {
    const [contributors, updateContributors] = useState([{login: "Loading...."}])
    useEffect(() => {
        const fetchData = async () => {
            const octokit = new Octokit()

            let newContributors = await octokit.request('GET /repos/torgeirlysen/emne-guiden/contributors{?anon,per_page,page}', {
                owner: "torgeirlysen",
                repo: 'emne-guiden'
            })
            updateContributors(newContributors.data)
        }

        fetchData()
            .catch(console.error);
    }, [])


    return <Box sx={{marginTop: "30px", marginBottom: "30px"}}>
        <Button 
        sx={{color: "text.primary"}}
        onClick={() => openInNewTab("https://github.com/torgeirlysen/emne-guiden/graphs/contributors")}>
        <Typography variant="h4">
            Contributors
        </Typography>
        </Button>
        <List>
        <ListItem >
                    <ListItemText primary="Username" />
                    <Box>
                        <ListItemText
                            primary="Commits"
                            sx={{ marginLeft: "auto" }}
                        />
                    </Box>
                </ListItem>
            {contributors.map(user => {
                return <>
                    <ListItem>
                        <ListItemButton onClick={() => openInNewTab(user.html_url)}>
                            <img
                                height="40px"
                                style={{ borderRadius: "100vw", marginRight: "20px", border: "3px solid white" }}
                                src={user.avatar_url} />
                            <ListItemText>
                                {user.login}
                            </ListItemText>
                            <ListItemText sx={{ textAlign: "right" }}>
                                {user.contributions}
                            </ListItemText>
                        </ListItemButton>

                    </ListItem>
                    <Divider />
                </>
            }
            )
            }
        </List>


    </Box>
}