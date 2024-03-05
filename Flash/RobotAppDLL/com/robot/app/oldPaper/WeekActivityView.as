package com.robot.app.oldPaper
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSceneActivityController;
   import com.robot.core.info.SceneActivityInfo;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class WeekActivityView
   {
       
      
      private var _activitys:Array;
      
      private var curPage:int;
      
      private var totalPage:int;
      
      private const PERPAGE:int = 10;
      
      private var curArr:Array;
      
      private var _curselectidx:int = -1;
      
      private var _ui:MovieClip;
      
      private var _pagexml:XML;
      
      public function WeekActivityView(param1:MovieClip, param2:XML)
      {
         super();
         this._ui = param1;
         this._pagexml = param2;
         this._ui.addEventListener(MouseEvent.CLICK,this.clickHandle);
         var _loc3_:Array = NewSceneActivityController.getinstance().getactivityBystarttime(String(this._pagexml.@start));
         this.setData(_loc3_);
      }
      
      protected function setData(param1:Array) : void
      {
         this._activitys = param1;
         this._activitys.sortOn("id",Array.NUMERIC);
         this.totalPage = Math.ceil(this._activitys.length / this.PERPAGE);
         this.curPage = 1;
         this.showPage();
      }
      
      public function destroy() : void
      {
         this._pagexml = null;
         this._ui.removeEventListener(MouseEvent.CLICK,this.clickHandle);
         this._ui = null;
      }
      
      private function showPage(param1:int = 0) : void
      {
         var _loc4_:SceneActivityInfo = null;
         this.curPage += param1;
         if(this.curPage >= this.totalPage)
         {
            this.curPage = this.totalPage;
         }
         if(this.curPage < 1)
         {
            this.curPage = 1;
         }
         this._ui["pre"].visible = this.curPage > 1;
         this._ui["next"].visible = this.curPage < this.totalPage;
         var _loc2_:int = (this.curPage - 1) * this.PERPAGE;
         var _loc3_:int = this.curPage * this.PERPAGE;
         this.curArr = [];
         var _loc5_:int = _loc2_;
         while(_loc5_ < _loc3_)
         {
            if(_loc5_ < this._activitys.length)
            {
               _loc4_ = this._activitys[_loc5_];
               this.curArr.push(_loc4_);
            }
            _loc5_++;
         }
         var _loc6_:int = 0;
         while(_loc6_ < 10)
         {
            if(_loc6_ < this.curArr.length)
            {
               this._ui["mc_" + _loc6_].visible = true;
               this._ui["mc_" + _loc6_]["aname"].text = this.curArr[_loc6_].title;
               this._ui["mc_" + _loc6_]["icon"].gotoAndStop(this.curArr[_loc6_].type + 1);
            }
            else
            {
               this._ui["mc_" + _loc6_].visible = false;
            }
            _loc6_++;
         }
         this.curselectidx = 0;
      }
      
      private function clickHandle(param1:*) : void
      {
         var idx:int = 0;
         var info:SceneActivityInfo = null;
         var str:String = null;
         var tmpstr:Array = null;
         var e:* = param1;
         var ename:String = String(e.target.name);
         var epname:String = String(e.target.parent.name);
         if(epname.indexOf("mc_") != -1 && ename == "go")
         {
            idx = int(epname.split("_")[1]);
            info = this.curArr[idx];
            str = String(info.redirect);
            if(!info.inActivity)
            {
               return;
            }
            switch(str)
            {
               case "module":
                  ModuleManager.hideAllModule();
                  ModuleManager.showModule(ClientConfig.getModule(info.redirectValue));
                  break;
               case "map":
                  ModuleManager.hideAllModule();
                  MapManager.changeMap(parseInt(info.redirectValue));
                  break;
               case "map&module":
               case "map|module":
                  ModuleManager.hideAllModule();
                  tmpstr = String(info.redirectValue).split(";");
                  MapManager.changeMapWithCallback(int(tmpstr[0]),function():void
                  {
                     ModuleManager.showModule(ClientConfig.getModule(tmpstr[1]));
                  });
            }
            return;
         }
         switch(ename)
         {
            case "pre":
               this.showPage(-1);
               break;
            case "next":
               this.showPage(1);
         }
      }
      
      public function get curselectidx() : int
      {
         return this._curselectidx;
      }
      
      public function set curselectidx(param1:int) : void
      {
         this._curselectidx = param1;
      }
   }
}
