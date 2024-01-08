import { Box, Grid, Button, Container, Card, Stack } from "@mui/material";
import KeyboardTab from "@mui/icons-material/KeyboardTab"; // CUSTOM COMPONENTS

import { H2, Paragraph } from "@/components/typography"; // CUSTOM DEFINED HOOK

import useNavigate from "@/hooks/useNavigate";

const Section4 = () => {
  const navigate = useNavigate();
  return <Container maxWidth="lg" sx={{
    mb: 8,
    mt: {
      sm: 24,
      xs: 12
    }
  }}>
      <Grid container spacing={2}>
        <Grid item lg={5} md={6} xs={12}>
          <Box maxWidth={450} position="sticky" top={0} pt={4} mb={{
          xs: 4,
          mb: 0
        }}>
            <H2 fontSize={36}>
              Ready to use <br /> apps and pages
            </H2>

            <Paragraph mt={1} mb={3} fontSize={18} color="text.secondary">
              Save thousands of development hours with QuickFrame’s well crafted features and clean code
            </Paragraph>

            <Button color="secondary" variant="outlined" startIcon={<KeyboardTab />} onClick={() => navigate("/dashboard/product-list")}>
              Browse pages & apps
            </Button>
          </Box>
        </Grid>

        <Grid item lg={7} md={6} xs={12}>
          <Stack spacing={6}>
            <Card component="img" src="/static/landing/profile.jpg" alt="profile" />
            <Card component="img" src="/static/landing/email.jpg" alt="dashboard 2" />
            <Card component="img" src="/static/landing/chat.jpg" alt="dashboard 2" />
            <Card component="img" src="/static/landing/users.jpg" alt="user list" />
          </Stack>
        </Grid>
      </Grid>
    </Container>;
};

export default Section4;