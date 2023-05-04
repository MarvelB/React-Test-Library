import { render, screen } from "@testing-library/react";
import FollowersList from "../FollowersList";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />;
        </BrowserRouter>
    );
};

jest.mock("axios", () => ({
    __esModule: true,
    default: {
        get: () => ({
            data: {
                results: [
                    {
                        gender: "male",
                        name: {
                            title: "Mr",
                            first: "Clayton",
                            last: "Murphy",
                        },
                        location: {
                            street: {
                                number: 7013,
                                name: "Oak Ridge Ln",
                            },
                            city: "Dubbo",
                            state: "Western Australia",
                            country: "Australia",
                            postcode: 9151,
                            coordinates: {
                                latitude: "-88.0410",
                                longitude: "-142.5044",
                            },
                            timezone: {
                                offset: "-2:00",
                                description: "Mid-Atlantic",
                            },
                        },
                        email: "clayton.murphy@example.com",
                        login: {
                            uuid: "2a5b95fa-18fc-4b06-86ab-eadd10d506ab",
                            username: "purplepanda913",
                            password: "hannah1",
                            salt: "eG8WRdzr",
                            md5: "4c71ff84bc47a50cf5a7b049a8c94be0",
                            sha1: "ec1a4d2f7a64e4e7be2a9819aecf45357c1b5680",
                            sha256: "a8c28bb3895c506d76d5a8bc64eadbcd7a26cf5fc04d2968935adaf2a2b2c27e",
                        },
                        dob: {
                            date: "1982-12-19T07:08:44.923Z",
                            age: 40,
                        },
                        registered: {
                            date: "2019-03-22T19:30:08.473Z",
                            age: 4,
                        },
                        phone: "01-0830-4672",
                        cell: "0430-933-690",
                        id: {
                            name: "TFN",
                            value: "053954552",
                        },
                        picture: {
                            large: "https://randomuser.me/api/portraits/men/85.jpg",
                            medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
                            thumbnail:
                                "https://randomuser.me/api/portraits/thumb/men/85.jpg",
                        },
                        nat: "AU",
                    },
                    {
                        gender: "male",
                        name: {
                            title: "Mr",
                            first: "John",
                            last: "Gardner",
                        },
                        location: {
                            street: {
                                number: 534,
                                name: "Galway Road",
                            },
                            city: "Carlow",
                            state: "Monaghan",
                            country: "Ireland",
                            postcode: 55146,
                            coordinates: {
                                latitude: "-49.9223",
                                longitude: "-52.1435",
                            },
                            timezone: {
                                offset: "-1:00",
                                description: "Azores, Cape Verde Islands",
                            },
                        },
                        email: "john.gardner@example.com",
                        login: {
                            uuid: "0e569f00-85e9-4788-be83-846022a83dbf",
                            username: "silversnake205",
                            password: "bearcats",
                            salt: "nZT81KDL",
                            md5: "9715bd6cec510978282b828e5b63f659",
                            sha1: "1bf21075ceb1ab6dab5026c6e64837c30f162459",
                            sha256: "ca4cb19776f2597df98930da528815b84b8b4abe4208a62964c6b6966aa92e5e",
                        },
                        dob: {
                            date: "1970-11-17T20:00:47.941Z",
                            age: 52,
                        },
                        registered: {
                            date: "2015-09-20T12:55:38.396Z",
                            age: 7,
                        },
                        phone: "051-453-3016",
                        cell: "081-165-6801",
                        id: {
                            name: "PPS",
                            value: "6260441T",
                        },
                        picture: {
                            large: "https://randomuser.me/api/portraits/men/54.jpg",
                            medium: "https://randomuser.me/api/portraits/med/men/54.jpg",
                            thumbnail:
                                "https://randomuser.me/api/portraits/thumb/men/54.jpg",
                        },
                        nat: "IE",
                    },
                    {
                        gender: "female",
                        name: {
                            title: "Ms",
                            first: "Maribel",
                            last: "Ribeiro",
                        },
                        location: {
                            street: {
                                number: 8333,
                                name: "Travessa dos Martírios",
                            },
                            city: "Toledo",
                            state: "Santa Catarina",
                            country: "Brazil",
                            postcode: 27147,
                            coordinates: {
                                latitude: "62.8362",
                                longitude: "33.7240",
                            },
                            timezone: {
                                offset: "+6:00",
                                description: "Almaty, Dhaka, Colombo",
                            },
                        },
                        email: "maribel.ribeiro@example.com",
                        login: {
                            uuid: "791cd17a-8978-4541-aa29-89d02a391762",
                            username: "angrytiger235",
                            password: "spring",
                            salt: "E7HP4A9j",
                            md5: "584ff2af9dd9ac8a642dc8adc8aed564",
                            sha1: "0474fb1336b5d3d410c72363f222ee0a602879b9",
                            sha256: "684ff057f630e77764044fdc172cefb7d74b4484b5fcb88bc25d1ceb40f59670",
                        },
                        dob: {
                            date: "1990-11-14T16:26:44.682Z",
                            age: 32,
                        },
                        registered: {
                            date: "2008-05-02T16:46:53.558Z",
                            age: 15,
                        },
                        phone: "(75) 5794-2798",
                        cell: "(49) 4742-5134",
                        id: {
                            name: "CPF",
                            value: "325.564.748-97",
                        },
                        picture: {
                            large: "https://randomuser.me/api/portraits/women/89.jpg",
                            medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
                            thumbnail:
                                "https://randomuser.me/api/portraits/thumb/women/89.jpg",
                        },
                        nat: "BR",
                    },
                    {
                        gender: "female",
                        name: {
                            title: "Miss",
                            first: "Roza",
                            last: "Yurchak",
                        },
                        location: {
                            street: {
                                number: 1527,
                                name: "Trusha",
                            },
                            city: "Zorinsk",
                            state: "Ternopilska",
                            country: "Ukraine",
                            postcode: 57963,
                            coordinates: {
                                latitude: "-79.0363",
                                longitude: "90.8212",
                            },
                            timezone: {
                                offset: "+5:00",
                                description:
                                    "Ekaterinburg, Islamabad, Karachi, Tashkent",
                            },
                        },
                        email: "roza.yurchak@example.com",
                        login: {
                            uuid: "adbcdfed-37f8-4ae6-b2d0-e2d4ec88be63",
                            username: "orangerabbit721",
                            password: "vvvvv",
                            salt: "H1ANTRcC",
                            md5: "4b31e276b966a02f9bfb313ee3cabdf5",
                            sha1: "97106aa0bf23f7366a6d297e05bdc2fe74a1328c",
                            sha256: "4c5b87592753cc34fbacfd6bb43f539661f15f65a7e5039d0e351780d9345553",
                        },
                        dob: {
                            date: "1947-08-08T21:19:52.893Z",
                            age: 75,
                        },
                        registered: {
                            date: "2017-05-05T23:18:35.734Z",
                            age: 5,
                        },
                        phone: "(099) C74-0652",
                        cell: "(099) O59-0667",
                        id: {
                            name: "",
                            value: null,
                        },
                        picture: {
                            large: "https://randomuser.me/api/portraits/women/15.jpg",
                            medium: "https://randomuser.me/api/portraits/med/women/15.jpg",
                            thumbnail:
                                "https://randomuser.me/api/portraits/thumb/women/15.jpg",
                        },
                        nat: "UA",
                    },
                    {
                        gender: "male",
                        name: {
                            title: "Mr",
                            first: "Zachary",
                            last: "Park",
                        },
                        location: {
                            street: {
                                number: 7241,
                                name: "Elgin St",
                            },
                            city: "St. George",
                            state: "Manitoba",
                            country: "Canada",
                            postcode: "D8T 5Y0",
                            coordinates: {
                                latitude: "46.3123",
                                longitude: "171.7785",
                            },
                            timezone: {
                                offset: "-7:00",
                                description: "Mountain Time (US & Canada)",
                            },
                        },
                        email: "zachary.park@example.com",
                        login: {
                            uuid: "c7f7c748-3475-4388-96c7-debeebf3b235",
                            username: "crazyladybug975",
                            password: "thompson",
                            salt: "xQ8yolW8",
                            md5: "047905fb2fec119cf16d163a829156b5",
                            sha1: "326dbd84f35c09b78c1bc757649a09f60ab8c3a8",
                            sha256: "0a6c1fdf5da2c14c3005a8d8964a4a865c0a4107f6c655757c62f839da18a81b",
                        },
                        dob: {
                            date: "1991-04-25T07:13:23.838Z",
                            age: 32,
                        },
                        registered: {
                            date: "2008-06-09T15:08:34.368Z",
                            age: 14,
                        },
                        phone: "E83 N02-4388",
                        cell: "Y09 I05-3923",
                        id: {
                            name: "SIN",
                            value: "263378234",
                        },
                        picture: {
                            large: "https://randomuser.me/api/portraits/men/86.jpg",
                            medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
                            thumbnail:
                                "https://randomuser.me/api/portraits/thumb/men/86.jpg",
                        },
                        nat: "CA",
                    },
                ],
            },
        }),
    },
}));

describe("FollowersList", () => {
    it("Should be able to find first follower in the list", async () => {
        render(<MockFollowersList />);

        const followerElement = await screen.findByTestId("follower-item-0");

        expect(followerElement).toBeInTheDocument();
    });

    it("Should be able to render multiple followers", async () => {
        render(<MockFollowersList />);

        const followersElement = await screen.findAllByTestId(/follower-item/i);

        expect(followersElement.length).toBe(5);
    });
});
