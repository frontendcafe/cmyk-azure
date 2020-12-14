import Playlist from '../../models/Playlist';
import Song from '../../models/Song';
import makeRequestAuth from './makeRequestAuth';

/**
 * Retorna el listado de playlist que el usuario logueado tiene guardadas, no necesariamente son de su propiedad.
 * En spotify el offset y el limit no se pueden ignorar, y el maximo limite permitido es de 100.
 * @param offset a partir de donde se empieza a tomar playlists
 * @param limit la cantidad limite de playlists. Ej: quiero 50 playlists
 */
const getActualUserPlaylists = async (
  offset: number = 0,
  limit: number = 100
): Promise<Playlist[] | null> => {
  const response = await makeRequestAuth({ url: 'me/playlists' });

  return response && response.items
    ? response.items.map((playlist: any) => new Playlist(playlist))
    : null;
};

/**
 *  Retorna el listado de canciones de una playlist
 * @param id
 * @param market
 * @param offset a partir de donde se empieza a tomar playlists
 * @param limit la cantidad limite de canciones. Ej: quiero 50 canciones
 */
const getPlaylistSongs = async (
  id: string,
  market: string = 'ES',
  offset: number = 0,
  limit: number = 100
) => {
  const response = await makeRequestAuth({ url: `playlists/${id}/tracks` });

  return response && response.items
    ? response.items.map((item: any) => new Song(item.track))
    : null;
};

/**
 * Obtiene la informacion de una playlist
 * @param id representa el id de la playlist a obtener
 */
const getPlaylistById = async (id: string) => {
  const response = await makeRequestAuth({ url: `playlists/${id}` });

  return response ? new Playlist(response) : null;
};

export { getActualUserPlaylists, getPlaylistById, getPlaylistSongs };
