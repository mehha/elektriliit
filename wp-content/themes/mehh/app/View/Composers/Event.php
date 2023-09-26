<?php

namespace app\View\Composers;

use DateTime;
use Roots\Acorn\View\Composer;

class Event extends Composer
{
    protected static $views = [
        'partials.meta.event-meta',
    ];

    public function with()
    {
        return [
            'date' => $this->getDate(),
            'time' => $this->getTime(),
            'location' => $this->getLoc(),
        ];
    }

    public function getDate()
    {
        $begin = function_exists('get_field') ?  get_field('begin_date_time') : false;
        $end = function_exists('get_field') ?  get_field('end_date_time') : false;

        // Extract only the date portion from DateTime fields
        $beginDate = $begin ? date('d. m. Y', strtotime($begin)) : false;
        $endDate = $end ? date('d. m. Y', strtotime($end)) : false;

        // If both beginDate and endDate are valid, return them as a range
        if ($beginDate && $endDate) {
            return $beginDate . ' - ' . $endDate;
        }

        // If only beginDate is valid, return it
        if ($beginDate) {
            return $beginDate;
        }

        // If only endDate is valid, return it
        if ($endDate) {
            return $endDate;
        }

        return false;
    }

    public function getTime()
    {
        $begin = function_exists('get_field') ?  get_field('begin_date_time') : false;
        $end = function_exists('get_field') ?  get_field('end_date_time') : false;

        // Extract only the date portion from DateTime fields
        $beginTime = $begin ? date('H:i', strtotime($begin)) : false;
        $endTime = $end ? date('H:i', strtotime($end)) : false;

        // If both beginDate and endDate are valid, return them as a range
        if ($beginTime && $endTime) {
            return $beginTime . ' - ' . $endTime;
        }

        // If only beginDate is valid, return it
        if ($beginTime) {
            return $beginTime;
        }

        // If only endDate is valid, return it
        if ($endTime) {
            return $endTime;
        }

        return false;
    }

    public function getLoc()
    {
        $loc = function_exists('get_field') ?  get_field('location') : false;
        return $loc ?: false;
    }
}
