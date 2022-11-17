// import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { TopHeaderLayout } from "../templates/TopHeaderLayout";
import vegetable from "../../images/vegetable.png";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const Top: FC = memo(() => {
  const [userId, setUserId] = useState<string>('');

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);

  const navigate = useNavigate();

  const onClickTop = useCallback(() => navigate("/"), [navigate]);
  const onClickSignin = useCallback(() => navigate("/signin"), [navigate]);
  const onClickSignup = useCallback(() => navigate("/signup"), [navigate]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#009688',
        contrastText: '#795548',
      },
      background: {
        default: '#DFEEE5',
      },
      text: { primary: '#ff9800' },
    },
  });

  return (
    <>
      <TopHeaderLayout>
        {/* <ThemeProvider theme={theme}> */}
        <Box sx={{
          backgroundColor: '#DFEEE5'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <div style={{
              marginTop: '15px',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${vegetable})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: "cover",
              height: '500px'
            }}>
              {/* <div style={{
                position: 'absolute',
                top: '50%',
                // left: '50%',
                // transform: 'translate(-50 %, -50 %)',
                color: 'white'
              }}> */}
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h1 style={{
                  color: 'white',
                  marginTop: '150px',
                  marginBottom: '1px'
                }}>
                  食生活の管理、始めてみませんか？
                </h1>
                <h3 style={{
                  color: 'white',
                  margin: '0px'
                }}>
                  食べマネは食生活をアプリで管理、共有することで、
                </h3>
                <h3 style={{
                  color: 'white',
                  margin: '0px'
                }}>
                  日々の暮らしを快適にするサービス。
                </h3>
                <h3 style={{
                  color: 'white',
                  margin: '0px'
                }}>
                  今日からあなたの食生活が変わります。
                </h3>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={onClickSignup}
                    sx={{
                      mt: 3,
                      mb: 1,
                      maxWidth: '200px',
                      minWidth: '200px',
                      backgroundColor: '#FF8F00',
                      '&:hover': {
                        backgroundColor: '#FF8F00',
                        opacity: 0.8
                      },
                    }}>
                    アカウント登録
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    onClick={onClickSignin}
                    sx={{
                      mt: 1,
                      mb: 2,
                      maxWidth: '200px',
                      minWidth: '200px',
                      backgroundColor: '#117768',
                      '&:hover': {
                        backgroundColor: '#117768',
                        opacity: 0.8
                      },
                    }}
                  >
                    ログイン
                  </Button>
                </Grid>
              </Box>
            </div>
          </div>
          <Box
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{
              fontSize: '40px',
              color: 'black'
            }}>
              <u>
                食べマネでできること
              </u>
            </div>
          </Box>

        </Box>
        {/* </ThemeProvider> */}
      </TopHeaderLayout>
    </>
  )
})
