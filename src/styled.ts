import back from './styles/background.png'
import { styled } from "./shared/lib";

interface SrcProp {
  $src?: boolean;
  $background?: string;
}

export const AppContainer = styled('div')<SrcProp>(({$src, $background}) => ({
  background: $src ? `url(${back})` : $background,
  backgroundSize: 'cover',
  padding: "32px 60px"
}))
