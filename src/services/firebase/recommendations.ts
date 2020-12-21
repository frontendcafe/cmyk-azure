import Playlist from '../../models/Playlist';
import { getInstance } from './config';
const COLLECTION_NAME = 'recommendations';

const addRecommendation = async (playlist: Playlist): Promise<boolean> => {
  try {
    const instance = getInstance();
    const exist = await existRecomendation(playlist.id ?? '');

    if (instance && !exist) {
      await instance.db
        .collection(COLLECTION_NAME)
        .doc(playlist.id)
        .set(mapPlaylistToSave(playlist));

      return true;
    }

    return false;
  } catch {
    return false;
  }
};

const mapPlaylistToSave = (playlist: Playlist) => {
  return { id: playlist.id, user: { id: playlist.user?.id } };
};

const existRecomendation = async (id: string): Promise<boolean> => {
  try {
    const instance = getInstance();
    if (instance) {
      const querySnapshot = await instance.db
        .collection(COLLECTION_NAME)
        .doc(id)
        .get();

      return querySnapshot.exists;
    }

    return false;
  } catch {
    return false;
  }
};

const getRecomendations = async (
  userId?: string
): Promise<Playlist[] | null> => {
  try {
    const instance = getInstance();
    if (instance) {
      let collection = instance.db.collection(COLLECTION_NAME);
      let querySnapshot;

      if (userId) collection = collection.where('user.id', '==', userId);

      querySnapshot = await collection.get();

      return querySnapshot?.docs
        ? querySnapshot.docs.map(
            (playlist: any) => new Playlist(playlist.data())
          )
        : null;
    }

    return null;
  } catch {
    return null;
  }
};

export { addRecommendation, getRecomendations, existRecomendation };
