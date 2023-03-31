import React from 'react';

const Header = () => {
    return (
      <div>
        <div className="navbar bg-base-100 border-b-2 border-zinc-200">
          <div className="flex-1 text-2xl font-bold">
            <h1>Knowledge Cafe</h1>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;