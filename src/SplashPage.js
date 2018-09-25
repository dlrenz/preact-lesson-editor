import { h, Component } from 'preact';
import styled from 'styled-components';

import theme from './styles/theme';

const StyledPage = styled.div`
	margin: 10px 10px 10px 10px;
`;

const StyledLink = styled.a`
	background: ${theme.button.bg};
	color: ${theme.button.fg};
	text-decoration: none;
	padding: 10px 20px;
	box-shadow: 2px 2px 2px #bbbbbb;
	margin: 5px;
	border: 1px solid ${theme.button.border};
`;

class SplashPage extends Component {
  render() {
    return (
      <StyledPage className='SplashPage'>
        <StyledLink href='/edit'>Edit</StyledLink>
        <StyledLink href='/view'>View</StyledLink>
      </StyledPage>
    );
  }
}

export default SplashPage;
