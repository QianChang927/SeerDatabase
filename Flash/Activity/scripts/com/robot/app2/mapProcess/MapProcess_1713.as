package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.MouseEvent;
   
   public class MapProcess_1713 extends BaseMapProcess
   {
       
      
      private var _itemNum:int;
      
      private var _getItemNum:int;
      
      public function MapProcess_1713()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         btnLevel.addEventListener(MouseEvent.CLICK,this.onBtnonclickHandle);
         conLevel.addEventListener(MouseEvent.CLICK,this.onConclickHandle);
         this.update();
      }
      
      private function update() : void
      {
         ItemManager.updateItems([301034],function():void
         {
            _itemNum = ItemManager.getNumByID(301034);
         });
         KTool.getMultiValue([124338,124339],function(param1:Array):void
         {
            _getItemNum = KTool.subByte(param1[1],0,8);
         });
      }
      
      private function onConclickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "fireBtn":
               DialogControl.showAllDilogs(172,12).then(function(param1:int):void
               {
                  var va:int = param1;
                  if(va == 1)
                  {
                     if(_itemNum > 0)
                     {
                        KTool.socketSendCallBack(41900,function():void
                        {
                           update();
                        },[103,14]);
                     }
                     else
                     {
                        Alarm2.show("背包内没有【冻僵的松果】了…");
                     }
                  }
               });
         }
      }
      
      private function onBtnonclickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "treeBtn":
               if(this._getItemNum < 5)
               {
                  AnimateManager.playMcAnimate(btnLevel["treeMc"],1,"mc1",function():void
                  {
                     btnLevel["treeMc"].gotoAndStop(1);
                     btnLevel["treeMc"]["mc1"].gotoAndStop(1);
                     KTool.socketSendCallBack(41900,function():void
                     {
                        DialogControl.showAllDilogs(172,10).then(function(param1:int):void
                        {
                        });
                        update();
                     },[103,13]);
                  },false,true);
               }
               else
               {
                  AnimateManager.playMcAnimate(btnLevel["treeMc"],2,"mc2",function():void
                  {
                     btnLevel["treeMc"].gotoAndStop(2);
                     btnLevel["treeMc"]["mc2"].gotoAndStop(1);
                     DialogControl.showAllDilogs(172,11).then(function(param1:int):void
                     {
                     });
                  },false,true);
               }
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConclickHandle);
         btnLevel.removeEventListener(MouseEvent.CLICK,this.onBtnonclickHandle);
         super.destroy();
      }
   }
}
