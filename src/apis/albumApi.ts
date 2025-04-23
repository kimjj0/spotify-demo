import axios from 'axios';
import { SPOTIFY_BASE_URL } from '../configs/commonConfigs';
import { GetNewReleasesResponse } from '../models/album';

export const getNewReleases = async (
  clientCredentialToken: string,
): Promise<GetNewReleasesResponse> => {
  try {
    const response = await axios.get(`${SPOTIFY_BASE_URL}/browse/new-releases?limit=12`, {
      headers: {
        Authorization: `Bearer ${clientCredentialToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('fail to getch new releases');
  }
};
