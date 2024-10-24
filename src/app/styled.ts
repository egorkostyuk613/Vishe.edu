import {styled} from "shared/lib";
import back from './styles/background.png'

interface SrcProp {
  $src?: boolean;
  $background?: string;
}

export const AppContainer = styled('div')<SrcProp>(({$src, $background}) => ({
  background: $src ? `url(${back})` : $background,
  backgroundSize: 'cover',
  padding: "32px 60px"
}))
