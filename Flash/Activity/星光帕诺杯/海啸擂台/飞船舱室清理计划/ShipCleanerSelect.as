package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   
   public class ShipCleanerSelect extends ActivityModel
   {
      private var isStart:Boolean = false;
      
      private var hasInit:int;
      
      private var mapArr:Array;
      
      private var sumGetCoinArr:Array;
      
      private var isInAnim:Boolean = false;
      
      public function ShipCleanerSelect()
      {
         super();
         resUrl = "2024/1011/ShipCleanerSelect";
         configUrl = "2024/1011/ShipCleanerConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         ui.txtCoin.text = "";
      }
      
      private function onStart() : void
      {
         if(!this.isStart)
         {
            this.isStart = true;
         }
      }
      
      override protected function updatePanel() : void
      {
         this.updateData();
         this.onStart();
         this.updateDisplay();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var pbtnName:String = null;
         var pindex:int = 0;
         if(this.isInAnim)
         {
            return;
         }
         if(!this.isStart)
         {
            return;
         }
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("ShipCleanerEnter");
               break;
            case "btnGoto":
               pbtnName = e.target.parent.name;
               pindex = int(pbtnName.split("_")[1]);
               ModuleManager.showAppModule("ShipCleanerGame",[this.mapArr.indexOf(pindex) + 1,pindex]);
               this.hide();
         }
      }
      
      override public function hide() : void
      {
         this.mapArr = null;
         super.hide();
      }
      
      private function updateData() : void
      {
         this.mapArr = getValue("mapArr");
         this.sumGetCoinArr = getValue("sumGetCoinArr");
      }
      
      private function updateDisplay() : void
      {
         var i:int = 0;
         var k:int = 0;
         var recordDay:int = int(BitBuffSetClass.getBinaryValue(24498,4));
         var curDay:int = SystemTimerManager.sysDate.date - 10;
         if(this.sumGetCoinArr[0] + this.sumGetCoinArr[1] == 0 && curDay > recordDay)
         {
            BitBuffSetClass.setBinaryValue(24498,4,curDay);
            this.isInAnim = true;
            for(i = 1; i <= 6; i++)
            {
               if(this.mapArr.indexOf(i) >= 0)
               {
                  AnimateManager.playMcAnimate(ui["anim_" + i],1,"",function():void
                  {
                     for(var k:int = 1; k <= 6; k++)
                     {
                        ui["anim_" + k].visible = false;
                     }
                     isInAnim = false;
                  },false,true);
               }
               else
               {
                  ui["anim_" + i].visible = false;
               }
            }
         }
         else
         {
            for(k = 1; k <= 6; k++)
            {
               ui["anim_" + k].visible = false;
            }
         }
         for(i = 1; i <= 6; i++)
         {
            if(this.mapArr.indexOf(i) >= 0)
            {
               if(this.sumGetCoinArr[this.mapArr.indexOf(i)] == 105)
               {
                  ui["map_" + i].gotoAndStop(3);
               }
               else
               {
                  ui["map_" + i].gotoAndStop(1);
               }
            }
            else
            {
               ui["map_" + i].gotoAndStop(2);
            }
         }
         ui.txtCoin.text = this.sumGetCoinArr[0] + this.sumGetCoinArr[1];
      }
   }
}

