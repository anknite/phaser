/**
 * [description]
 *
 * @function Phaser.Math.Angle.Normalize
 * @since 3.0.0
 *
 * @param {number} angle - [description]
 *
 * @return {number} [description]
 */
var Normalize = function (angle)
{
    angle = angle % (2 * Math.PI);

    if (angle >= 0)
    {
        return angle;
    }
    else
    {
        return angle + 2 * Math.PI;
    }
};

module.exports = Normalize;
