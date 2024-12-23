package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   
   public class AncestralGiantVsSnowMountainGiantMainPanel extends ActivityModel
   {
      private var m_Itemcount:int;
      
      private var _requireNumArr:Array;
      
      public function AncestralGiantVsSnowMountainGiantMainPanel()
      {
         super();
         resUrl = "2024/1220/AncestralGiantVsSnowMountainGiantMainPanel";
         configUrl = "2024/1220/ancestralGiantVsSnowMountainGiantConfig";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         var num:int = 0;
         this.m_Itemcount = getValue("ItemNum");
         var exchangeState:int = int(getValue("exchangeState"));
         var limitNumArr:Array = getValue("limitNumArr");
         this._requireNumArr = getValue("requireNumArr");
         var daily_11915:int = int(getValue("daily_11915"));
         var winnum:int = int(KTool.subByte(daily_11915,8,8));
         _ui["num"].text = this.m_Itemcount;
         for(var i:int = 0; i < 6; i++)
         {
            num = int(KTool.subByte(exchangeState,i * 4,4));
            _mainUI["numTx_" + i].text = num + "/" + limitNumArr[i];
            if(num >= limitNumArr[i])
            {
               _mainUI["btnMc_" + i].gotoAndStop(2);
            }
            else
            {
               _mainUI["btnMc_" + i].gotoAndStop(1);
            }
         }
         if(winnum >= 12)
         {
            _mainUI.btnMc.gotoAndStop(2);
         }
         else
         {
            _mainUI.btnMc.gotoAndStop(1);
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btn_name)
         {
            case "close":
               hide();
               break;
            case "exchangeBtn":
               if(this.m_Itemcount >= this._requireNumArr[index1])
               {
                  sendCmd(45850,[32,index1 + 2],function():void
                  {
                     refresh();
                  });
               }
               else
               {
                  doAction("Tips1");
               }
               break;
            case "go":
               hide();
               MapManager.changeMap(11921);
               break;
            case "addBtn":
               ModuleManager.showAppModule("MultiBuyPanel",{
                  "productID":261174,
                  "iconID":1726499,
                  "exchangeID":14459,
                  "callFunction":function(num:int = 0):void
                  {
                     refresh();
                  }
               });
         }
      }
   }
}

