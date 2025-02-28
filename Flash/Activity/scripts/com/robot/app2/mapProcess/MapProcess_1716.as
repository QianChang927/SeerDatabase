package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class MapProcess_1716 extends BaseMapProcess
   {
       
      
      private var _originData:uint = 0;
      
      public function MapProcess_1716()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         conLevel.addEventListener(MouseEvent.CLICK,this.onConclickHandle);
         animatorLevel["eyeMc_0"].visible = false;
         animatorLevel["eyeMc_1"].visible = false;
         animatorLevel["playMc"].visible = false;
         animatorLevel["dianliuMc_0"].visible = false;
         animatorLevel["dianliuMc_1"].visible = false;
         this.update();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([124338],function(param1:Array):void
         {
            if(BitUtils.getBit(param1[0],15) > 0)
            {
               conLevel["interactiveBtn_0"].visible = false;
            }
            else
            {
               conLevel["interactiveBtn_0"].visible = true;
            }
            if(BitUtils.getBit(param1[0],16) > 0)
            {
               animatorLevel["eyeMc_0"].visible = true;
               animatorLevel["eyeMc_1"].visible = true;
               conLevel["interactiveBtn1_0"].visible = false;
               conLevel["interactiveBtn1_1"].visible = false;
               animatorLevel["dianliuMc_0"].visible = true;
               animatorLevel["dianliuMc_1"].visible = true;
            }
            else
            {
               animatorLevel["eyeMc_0"].visible = false;
               animatorLevel["eyeMc_1"].visible = false;
               conLevel["interactiveBtn1_0"].visible = true;
               conLevel["interactiveBtn1_1"].visible = true;
            }
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
            case "interactiveBtn_0":
               DialogControl.showAllDilogs(172,14).then(function():void
               {
                  KTool.socketSendCallBack(41900,function():void
                  {
                     update();
                  },[103,16]);
               });
               break;
            case "interactiveBtn1_" + index:
               this._originData = BitUtils.setBit(this._originData,index);
               animatorLevel["dianliuMc_" + index].visible = true;
               if(this._originData == 3)
               {
                  animatorLevel["eyeMc_" + 0].visible = true;
                  animatorLevel["eyeMc_" + 1].visible = true;
                  animatorLevel["playMc"].visible = true;
                  AnimateManager.playMcAnimate(animatorLevel as MovieClip,1,"playMc",function():void
                  {
                     animatorLevel["playMc"].visible = false;
                     DialogControl.showAllDilogs(172,15).then(function():void
                     {
                        KTool.socketSendCallBack(41900,function():void
                        {
                           update();
                        },[103,17]);
                     });
                  },false,true);
               }
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConclickHandle);
         super.destroy();
      }
   }
}
