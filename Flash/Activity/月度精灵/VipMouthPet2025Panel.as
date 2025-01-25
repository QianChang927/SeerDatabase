package com.robot.module.app
{
   import com.robot.app.control.DynamicClipController;
   import com.robot.app.control.YearVip2016Controller;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.config.xml.VipMonthMonsterXMLInfo;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.MouseEvent;
   
   public class VipMouthPet2025Panel extends BaseModule
   {
      private var curPage:int = 1;
      
      private var states:Array;
      
      private var _curYearIndex:int = 9;
      
      private var _curmonth:int;
      
      public function VipMouthPet2025Panel()
      {
         super();
         resUrl = "update/monthlyPet/VipMouthPet2025Panel";
      }
      
      override public function show() : void
      {
         if(ActivityTimeControl.getIsinTime(YearVip2016Controller.openAcId))
         {
            this.update(this.supershow);
         }
         else
         {
            this.hide();
            Alarm2.show(YearVip2016Controller.curFullYear + YearVip2016Controller.curYearVipOpenTimeStr);
         }
         StatManager.sendStat2014("12302025年费输出","打开2025年费包月精灵面板","2022运营活动");
      }
      
      private function supershow() : void
      {
         super.show();
         eventCom.addClickEvent(_ui,this.clickHandle);
      }
      
      private function update(fun:Function = null) : void
      {
         var tmparr:Array = null;
         _ui.mouseChildren = _ui.mouseEnabled = false;
         tmparr = VipMonthMonsterXMLInfo.getPetForever(this._curYearIndex);
         this._curmonth = VipMonthMonsterXMLInfo.getMonthNum(this._curYearIndex);
         KTool.getMultiValue(tmparr,function(arr:Array):void
         {
            states = [];
            for(var i:int = 0; i < tmparr.length; i++)
            {
               states.push(arr[i]);
            }
            _ui.mouseChildren = _ui.mouseEnabled = true;
            changePage(0);
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private function clickHandle(e:MouseEvent) : void
      {
         var index1:int = 0;
         var mon:int = 0;
         var index:int = int(KTool.getIndex(e.target));
         switch(e.target.name)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("Yearvip2025MainPanel");
               break;
            case "vip":
               this.hide();
               DynamicClipController.openTtargetApp(3);
               break;
            case "next":
               this.changePage(1);
               break;
            case "pre":
               this.changePage(-1);
               break;
            case "reward":
               index1 = int(KTool.getIndex(e.target.parent));
               if(YearVip2016Controller.isYearVip)
               {
                  mon = (this.curPage - 1) * 4 + index1;
                  if(this._curmonth <= mon)
                  {
                     YearVip2016Controller.yearVipGofun(function():void
                     {
                        Alarm2.show("精灵暂未推出，敬请期待哦！");
                     },"2025全新包月神宠将于24年12月27日开启，敬请期待！");
                  }
                  else
                  {
                     SocketConnection.sendByQueue(42318,[101,mon + 1,VipMonthMonsterXMLInfo.getCurrentYear(this._curYearIndex)],function(e:*):void
                     {
                        update();
                        _ui.mouseChildren = _ui.mouseEnabled = true;
                     },function(err:*):void
                     {
                        _ui.mouseChildren = _ui.mouseEnabled = true;
                     });
                  }
               }
               else
               {
                  Alarm.show("仅2025年费用户才能领取。");
               }
         }
      }
      
      private function changePage(idx:int) : void
      {
         this.curPage += idx;
         if(this.curPage < 1)
         {
            this.curPage = 1;
         }
         if(this.curPage > 3)
         {
            this.curPage = 3;
         }
         for(var i:int = 0; i < 4; i++)
         {
            _ui["item_" + i].gotoAndStop((this.curPage - 1) * 4 + i + 1);
            if(this.states[(this.curPage - 1) * 4 + i] > 0)
            {
               _ui["btnMc_" + i].visible = true;
               _ui["btnMc_" + i].gotoAndStop(2);
            }
            else
            {
               _ui["btnMc_" + i].gotoAndStop(1);
               if(this._curmonth > int((this.curPage - 1) * 4 + i))
               {
                  _ui["btnMc_" + i].visible = true;
               }
               else
               {
                  _ui["btnMc_" + i].visible = false;
               }
            }
         }
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

