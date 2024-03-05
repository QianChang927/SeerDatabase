package com.robot.app2.systems.mapObject.viewClass
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObject;
   import com.robot.core.CommandID;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   
   public class LuckyCard extends MapObject
   {
       
      
      private var _tip:MovieClip;
      
      public function LuckyCard(param1:String, param2:Number, param3:Number, param4:String = "", param5:Number = 1, param6:Boolean = false)
      {
         super(param1,param2,param3,param4,param5,param6);
      }
      
      override protected function onLoadView(param1:MovieClip) : void
      {
         param1.gotoAndStop(1);
         this._tip = param1["tip"];
         if(this._tip)
         {
            param1.removeChild(this._tip);
         }
         super.onLoadView(param1);
         param1.scaleX = param1.scaleY = scale;
         if(isFlipHorizontally)
         {
            param1.scaleX = -1 * param1.scaleX;
         }
         this.refresh();
         SocketConnection.addCmdListener(CommandID.LUCKY_CARD_OPEN_CARD,this.refresh);
      }
      
      private function refresh(param1:* = null) : void
      {
         var e:* = param1;
         KTool.getLimitNum(10436,function(param1:int):void
         {
            if(param1 != 0)
            {
               if(Boolean(_tip) && Boolean(_tip.parent))
               {
                  _tip.parent.removeChild(_tip);
               }
            }
            else if(_tip)
            {
               addChild(_tip);
            }
         });
      }
      
      override public function destory() : void
      {
         SocketConnection.removeCmdListener(CommandID.LUCKY_CARD_OPEN_CARD,this.refresh);
         this._tip = null;
         super.destory();
      }
   }
}
