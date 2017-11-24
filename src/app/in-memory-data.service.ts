import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const datas = [
            {
                posts: [
                    {
                        id: 11,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work1.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 12,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work2.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 13,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work3.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 14,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work4.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 15,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work2.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 16,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work5.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 17,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work6.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 18,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work4.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                    {
                        id: 19,
                        title: 'Quisque non semper justo',
                        thumbnail: 'assets/img/work5.jpg',
                        background_image: 'assets/img/hero_image.jpg',
                        description: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        body: 'Nunc pellentesque mauris ut magna pulvinar, ligula diam congue orci, id cursus dui velit quis.',
                        status: 1
                    },
                ],
                user: [
                    {
                        id: 1,
                        username: 'username',
                        password: 'password',
                    },
                    {
                        id: 2,
                        username: 'manager',
                        password: 'manager',
                    },
                ],
            }
        ];
        return {datas};
    }
}
