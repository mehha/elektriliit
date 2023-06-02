<?php

namespace app\View\Composers;

use Roots\Acorn\View\Composer;

class Archive extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'page-archive',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function override()
    {
        return [
            'years' => $this->getYears(),
        ];
    }

    public function getYears()
    {
        $years = [];
        $args = array(
            'post_type' => 'post',
            'cat' => get_field('category') ? get_field('category') : 5,
            'posts_per_page' => -1,
        );

        $posts = get_posts($args);

        if ($posts) {
            foreach ($posts as $post) {
                $year = date_i18n('Y', strtotime($post->post_date));
                if (!in_array($year, $years)) {
                    $years[] = $year;
                }
            }
        }

        return $years ?: false;
    }
}
