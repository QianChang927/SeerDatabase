package com.robot.app.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.Timer;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class BattleLabNewsRecordCmdListener extends BaseBean
   {
       
      
      private var array:Array;
      
      private var isShow:Boolean = false;
      
      private var mc:MovieClip;
      
      private var timer:Timer;
      
      public function BattleLabNewsRecordCmdListener()
      {
         this.array = [];
         super();
      }
      
      override public function start() : void
      {
         this.mc = UIManager.getMovieClip("ui_Broadcast_mc");
         SocketConnection.addCmdListener(CommandID.BATTLE_LAB_SEND_MSG,this.onNewRecord);
         this.timer = new Timer(4000,1);
         this.timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         finish();
      }
      
      private function onNewRecord(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:Object = new Object();
         _loc3_.userId = _loc2_.readUnsignedInt();
         _loc3_.nick = _loc2_.readUTFBytes(16);
         _loc3_.maxRecord = _loc2_.readUnsignedInt();
         _loc3_.time = _loc2_.readUnsignedInt();
         if(_loc3_.userId == 0)
         {
            return;
         }
         this.array.push(_loc3_);
         this.show();
      }
      
      private function show() : void
      {
         if(this.isShow || this.array.length == 0)
         {
            return;
         }
         this.isShow = true;
         var _loc1_:Object = this.array.shift() as Object;
         var _loc2_:Date = new Date(_loc1_.time * 1000);
         this.mc["txt"].htmlText = "<b><font color=\'#ffff00\'>" + _loc1_.nick + "(" + _loc1_.userId + ")</font>在作战实验室仅用<font color=\'#ff0000\'>" + (_loc2_.getHours() - 8) + "时" + _loc2_.getMinutes() + "分</font>创造了新纪录连胜<font color=\'#ffff00\'>" + _loc1_.maxRecord + "</font>场！</b>";
         this.resizeMc(this.mc);
         this.timer.reset();
         this.timer.start();
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         this.isShow = false;
         DisplayUtil.removeForParent(this.mc);
         this.show();
      }
      
      private function resizeMc(param1:MovieClip) : MovieClip
      {
         param1["txt"].width = param1["txt"].textWidth;
         param1["bar"].width = param1["txt"].width + 54;
         MainManager.getStage().addChild(param1);
         DisplayUtil.align(param1,null,AlignType.TOP_CENTER,new Point(0,80));
         return param1;
      }
   }
}
