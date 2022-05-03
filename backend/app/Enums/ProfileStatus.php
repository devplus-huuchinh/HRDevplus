<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ProfileStatus extends Enum
{
    const PENDING = 'PENDING';
    const PROCESSING = 'PROCESSING';
    const APPROVE = 'APPROVE';
    const REJECT = 'REJECT';
}
