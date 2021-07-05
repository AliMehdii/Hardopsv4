import React from 'react'
import { Row, Col } from 'react-bootstrap'

function GumroadFollow() {
    let input = '<style> .gumroad-follow-form-embed { zoom: 1; } .gumroad-follow-form-embed:before, .gumroad-follow-form-embed:after { display: table; line-height: 0; content: ""; } .gumroad-follow-form-embed:after { clear: both; } .gumroad-follow-form-embed * { margin: 0; border: 0; padding: 0; outline: 0; box-sizing: border-box !important; float: left !important; } .gumroad-follow-form-embed input { border-radius: 4px; border-top-right-radius: 0; border-bottom-right-radius: 0; font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 15px; line-height: 20px; background: #fff; border: 1px solid #ddd; border-right: 0; color: #D07E1E; padding: 10px; box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.02); background-position: top right; background-repeat: no-repeat; text-rendering: optimizeLegibility; font-smoothing: antialiased; -webkit-appearance: none; -moz-appearance: caret; width: 65% !important; height: 40px !important; } .gumroad-follow-form-embed button { border-radius: 4px; border-top-left-radius: 0; border-bottom-left-radius: 0; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12); -webkit-transition: all .05s ease-in-out; transition: all .05s ease-in-out; display: inline-block; padding: 11px 15px 12px; cursor: pointer; color: #fff; font-size: 15px; line-height: 100%; font-family: -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif; background: #ffa600; border: 1px solid #e69500; filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#D07E1E, endColorstr=#D07E1E, GradientType=0)"; background: -webkit-linear-gradient(#D07E1E, #D07E1E); background: linear-gradient(to bottom, #ffcc26, #ec9a00); height: 40px !important; width: 35% !important; } </style><br/> <form action="https://gumroad.com/follow_from_embed_form" class="form gumroad-follow-form-embed" method="post"> <br/><input name="seller_id" type="hidden" value="4568768647941"><br/><input name="email" placeholder="Your email address" type="email"> <button data-custom-highlight-color="#D07E1E" type="submit" class="button">Follow</button> </form> ';

    return (
        <div >
            <Row className="mt-4 d-flex justify-content-center">
                <Col md={6} className="text-center block-example border-bottom  border-dark">
                    <h2>Follow us on gumroad</h2>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col md={6} className="" dangerouslySetInnerHTML={{ __html: input }}></Col>
            </Row>
        </div>

    )
}

export default GumroadFollow
