package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.events.MouseEvent;
   
   public class MapProcess_1705 extends BaseMapProcess
   {
       
      
      private var _maxNumChange:int = 3;
      
      private var _pumpkinClickNumArr:Array;
      
      public function MapProcess_1705()
      {
         this._pumpkinClickNumArr = [0,0,0];
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         conLevel["pumpkinViewMc"].mouseChildren = false;
         conLevel["pumpkinViewMc"].mouseEnabled = false;
         conLevel.addEventListener(MouseEvent.CLICK,this.clickHandle);
         conLevel["displayMc"].gotoAndStop(1);
         var _loc1_:int = 0;
         while(_loc1_ < 5)
         {
            if(_loc1_ < 3)
            {
               conLevel["pumpkinBtnMc_" + _loc1_].gotoAndStop(1);
            }
            conLevel["candleBtnMc_" + _loc1_].gotoAndStop(1);
            _loc1_++;
         }
         conLevel["pumpkinViewMc"].gotoAndStop(1);
         conLevel["candleViewMc"].gotoAndStop(1);
      }
      
      private function clickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "displayBtn":
               AnimateManager.playMcAnimate(conLevel["displayMc"],2,"mc2",function():void
               {
                  conLevel["displayMc"].gotoAndStop(1);
               },false,true);
               break;
            case "candleBtn":
               index1 = int(KTool.getIndex(e.target.parent));
               AnimateManager.playMcAnimate(conLevel["candleBtnMc_" + index1],3,"mc3",function():void
               {
                  conLevel["candleBtnMc_" + index1].gotoAndStop(2);
                  updateCandleView();
               },false,true);
               break;
            case "pumpkinBtn":
               index1 = int(KTool.getIndex(e.target.parent));
               if(this._pumpkinClickNumArr[index1] >= this._maxNumChange)
               {
                  return;
               }
               if(this._pumpkinClickNumArr[index1] < this._maxNumChange - 1)
               {
                  AnimateManager.playMcAnimate(conLevel["pumpkinBtnMc_" + index1],3,"mc3",function():void
                  {
                     conLevel["pumpkinBtnMc_" + index1].gotoAndStop(1);
                     _pumpkinClickNumArr[index1] += 1;
                  },false,true);
               }
               else
               {
                  AnimateManager.playMcAnimate(conLevel["pumpkinBtnMc_" + index1],4,"mc4",function():void
                  {
                     _pumpkinClickNumArr[index1] += 1;
                     conLevel["pumpkinBtnMc_" + index1].gotoAndStop(2);
                     updatePumpkinView();
                  },false,true);
               }
               break;
         }
      }
      
      private function updatePumpkinView() : void
      {
         if(this._pumpkinClickNumArr[0] >= this._maxNumChange && this._pumpkinClickNumArr[1] >= this._maxNumChange && this._pumpkinClickNumArr[2] >= this._maxNumChange)
         {
            AnimateManager.playMcAnimate(conLevel["pumpkinViewMc"],3,"mc3",function():void
            {
               conLevel["pumpkinViewMc"].gotoAndStop(2);
            },false,true);
         }
      }
      
      private function updateCandleView() : void
      {
         if(conLevel["candleBtnMc_" + 0].currentFrame == 2 && conLevel["candleBtnMc_" + 1].currentFrame == 2 && conLevel["candleBtnMc_" + 2].currentFrame == 2 && conLevel["candleBtnMc_" + 3].currentFrame == 2 && conLevel["candleBtnMc_" + 4].currentFrame == 2)
         {
            AnimateManager.playMcAnimate(conLevel["candleViewMc"],3,"mc3",function():void
            {
               conLevel["candleViewMc"].gotoAndStop(2);
            },false,true);
         }
      }
      
      override public function destroy() : void
      {
         conLevel.removeEventListener(MouseEvent.CLICK,this.clickHandle);
         this._pumpkinClickNumArr = null;
         super.destroy();
      }
   }
}
