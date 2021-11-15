<template>
    <div class="post-detail">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img class="post-image" src="@/assets/images/image-1.png" alt="">
                    <h1 class="dark page-title">
                        Netflix, Hayranlarını Meraktan Çatlatacak Stranger Things'in 4. Sezonundan Yeni Fragman
                        Yayınladı
                    </h1>
                    <user :user="user" />

                    <p class="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quibusdam? Placeat
                        repudiandae
                        nobis, sit quasi nulla ipsum animi ullam dolores distinctio ipsa fuga cupiditate incidunt
                        pariatur, quo exercitationem unde mollitia! Similique adipisci cupiditate error cum veritatis
                        quos ea minus laudantium hic tempore animi dolor qui, libero ipsa laborum molestias nemo fuga
                        veniam explicabo eligendi. Possimus, officia? Possimus expedita voluptate suscipit, repudiandae
                        iure laboriosam quibusdam, aut cupiditate iste eos ipsum odio quos? Quo officia soluta eaque
                        nemo numquam voluptatibus minima dicta ea, accusamus enim iste illo quia porro corrupti! Fugiat
                        voluptas vero expedita. Hic quisquam ipsam, velit eveniet, accusamus libero nobis expedita
                        perferendis doloremque sed ratione quidem iste tenetur numquam esse maiores quae tempore quia
                        quo reprehenderit optio. Reiciendis libero atque repellat quas impedit rerum praesentium ab
                        adipisci eveniet non incidunt enim pariatur cupiditate vitae obcaecati doloribus laboriosam
                        nulla, temporibus dolores commodi? Ea quisquam minus sint omnis corrupti et necessitatibus aut
                        odio doloremque. Omnis quidem, laborum dolor nostrum assumenda iusto ipsum doloremque cupiditate
                        debitis, accusantium autem non officiis adipisci cumque nulla maxime temporibus beatae
                        laudantium reiciendis animi est porro ex? Deserunt error aspernatur porro minus amet reiciendis
                        voluptatum modi similique vel suscipit, laudantium placeat eligendi tempore quas ut totam quia
                        cumque nostrum pariatur. Tenetur accusantium, vero veritatis esse aliquam ipsa vel expedita,
                        iusto, eos officiis cupiditate eaque sequi consequuntur suscipit? Dolorem ullam sapiente
                        doloremque voluptatum, molestiae nobis quis sed! Expedita est, soluta neque perferendis
                        laboriosam consequuntur ratione doloribus praesentium. Perspiciatis, possimus vitae deserunt,
                        fugit iure rerum vel distinctio quis neque reiciendis vero necessitatibus eveniet. Nobis,
                        corrupti.</p>
                    <p class="post-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae reiciendis
                        necessitatibus eaque laborum at nam architecto non nisi officiis voluptas quod, maiores vitae
                        enim odit unde eos praesentium voluptates quis illo ducimus nemo vero minus quo. Eum doloribus
                        nam perferendis repudiandae aut, id tempora, fugiat placeat quae hic maiores saepe temporibus
                        minima debitis, ratione voluptatibus enim repellat reiciendis ab tenetur obcaecati? Molestiae
                        suscipit cupiditate officiis expedita pariatur inventore? Id iure libero nesciunt, aperiam
                        consequuntur corporis dolorem. Temporibus possimus maxime eveniet, ipsam accusamus velit
                        incidunt pariatur adipisci amet, hic omnis iste laudantium cumque libero ipsa. At est,
                        architecto similique ea, eligendi mollitia ipsum natus molestias rem quidem dolorum deserunt?
                        Illum aliquam quisquam animi quo quis consequuntur adipisci quia, minima eos est ducimus minus
                        delectus natus corrupti obcaecati unde doloribus dolore officiis ratione dolores vitae velit
                        repellendus eveniet! Odit maiores amet officia omnis iusto doloribus? A dolore asperiores
                        expedita culpa nostrum veniam sed qui, cupiditate repellat, quam accusamus ad ex, sequi impedit
                        quibusdam dolorem. Sequi, iste? Nesciunt officia qui mollitia accusantium ipsam cumque
                        consequatur laboriosam dolore error sint voluptates explicabo placeat, aut fuga deleniti iste
                        quasi quidem perspiciatis quas ad velit labore ex similique? Debitis totam repudiandae,
                        consequatur tempora suscipit molestias!
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <comments />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import comments from '../organisms/Comments';
    import user from '../molecules/User';

    export default {
        components: {
            comments,
            user
        },
        data() {
            return {
                user: {
                    image: "editor-img",
                    name: "Nagehan Çavuş",
                    postShareTime: "2s önce",
                },
            }
        }
    };
</script>

<style lang="scss" scoped>
    .post-detail {
        padding: 30px;

        .post-image {
            width: 100%;
            height: 585px;
            object-fit: cover;
            object-position: top;
            border-radius: 5px;
            margin-bottom: 30px;
        }

        .page-title {
            margin-bottom: 20px;
        }

        .post-text {
            font-family: "PlusJakartaSans-Medium";
            line-height: 1.85;
            margin: 30px 0;
        }

        .share-links {
            margin-top: 0px;
            display: flex;
            align-items: center;

            span {
                font-size: 18px;
                margin-right: 12px;
                font-weight: 600;
                color: #222;
            }

            img {
                height: 20px;
                margin-right: 8px;
                cursor: pointer;
            }
        }
    }
</style>