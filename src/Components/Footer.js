import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright © 2036 <Link href="#">Cyborg Gaming</Link> Company. All rights reserved.

                            <br />Design: <Link href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</Link>
                            Distributed By <Link href="https://themewagon.com" target="_blank">ThemeWagon</Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer