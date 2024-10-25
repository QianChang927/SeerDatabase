package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   
   public class RepairTheObservationTerraceShopPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _shopArr:Array;
      
      public function RepairTheObservationTerraceShopPanel()
      {
         super();
         resUrl = "2024/1025/RepairTheObservationTerraceShopPanel";
         configUrl = "2024/1025/repairTheObservationTerraceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               ModuleManager.showAppModule("RepairTheObservationTerraceMainPanel");
               break;
            case "exchangeBtn_" + index:
               if(this._itemNum >= this._shopArr[index].requrieNum)
               {
                  sendCmd(this._commdId,[4,index + 1],function():void
                  {
                     refresh();
                  });
               }
               else
               {
                  Alarm2.show("所需团结凭证不足！");
               }
         }
      }
      
      override protected function updatePanel() : void
      {
         var obj:Object = null;
         this._commdId = getValue("comId")[0];
         this._shopArr = getValue("shopArr");
         this._itemNum = getValue("forever_105759");
         _mainUI.itemNumTx.text = "" + this._itemNum;
         var forever_105780:int = int(getValue("forever_105780"));
         for(var i:int = 0; i < 5; i++)
         {
            obj = this._shopArr[i] as Object;
            _mainUI["numTx_" + i].text = KTool.subByte(forever_105780,i * 4,4) + "/" + obj.limitNum;
            _mainUI["requireNumTx_" + i].mouseEnabled = false;
            if(KTool.subByte(forever_105780,i * 4,4) >= obj.limitNum)
            {
               CommonUI.setEnabled(_mainUI["exchangeBtn_" + i],false,true);
            }
         }
      }
      
      override public function hide() : void
      {
         this._shopArr = null;
         super.hide();
      }
   }
}

