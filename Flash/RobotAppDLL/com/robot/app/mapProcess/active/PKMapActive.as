package com.robot.app.mapProcess.active
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.teamPK.TeamPKManager;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.debug.DebugTrace;
   import org.taomee.ds.HashMap;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class PKMapActive
   {
       
      
      private const NONE:uint = 0;
      
      private const ATTACK:uint = 1;
      
      private const STONE:uint = 2;
      
      private var estradeMC:MovieClip;
      
      private var flag:uint;
      
      private var attackMC:MovieClip;
      
      private var stoneMC:MovieClip;
      
      private var _click_mc:MovieClip;
      
      private var _hit_mc:MovieClip;
      
      private var timerMap:HashMap;
      
      private var _type:uint;
      
      private var _apArr:Array;
      
      public function PKMapActive()
      {
         this._apArr = new Array([369,221],[634,257],[119,356],[119,450],[810,343],[497,386],[429,358]);
         super();
         this._type = TeamPKManager.type;
         SocketConnection.addCmdListener(CommandID.TEAM_PK_ACTIVE,this.onPKActive);
         SocketConnection.addCmdListener(CommandID.TEAM_PK_ACTIVE_NOTE_GET_ITEM,this.onNoteGetItem);
         this.estradeMC = MapManager.currentMap.depthLevel["estradeMC"];
         this.estradeMC.mouseEnabled = this.estradeMC.mouseChildren = false;
         this.attackMC = MapManager.currentMap.libManager.getMovieClip("attack_mc");
         this.stoneMC = MapManager.currentMap.libManager.getMovieClip("stone_mc");
         this.stoneMC.y = -40;
         this.attackMC.y = -40;
         this.stoneMC.mouseChildren = this.stoneMC.mouseEnabled = false;
         this.attackMC.mouseChildren = this.attackMC.mouseEnabled = false;
         this._click_mc = MapManager.currentMap.controlLevel["clickMC"];
         this._hit_mc = MapManager.currentMap.controlLevel["clickHit"];
         this._click_mc.mouseEnabled = false;
         this.timerMap = new HashMap();
      }
      
      public function clickHandler() : void
      {
         if(this.flag == this.ATTACK)
         {
            SocketConnection.send(CommandID.TEAM_PK_ACTIVE_GET_ATTACK);
         }
         else
         {
            SocketConnection.send(CommandID.TEAM_PK_ACTIVE_GET_STONE);
         }
      }
      
      private function onPKActive(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         this.flag = _loc2_.readUnsignedInt();
         this.update();
      }
      
      private function update() : void
      {
         var _loc1_:uint = 0;
         DebugTrace.show("update------------------------>",this.flag);
         if(this.flag != this.NONE)
         {
            this.estradeMC["lightMC"].gotoAndPlay(2);
            this._click_mc.mouseEnabled = true;
         }
         else
         {
            this._click_mc.mouseEnabled = false;
         }
         DisplayUtil.removeForParent(this.attackMC,false);
         DisplayUtil.removeForParent(this.stoneMC,false);
         if(this.flag == this.ATTACK)
         {
            this.estradeMC.addChild(this.attackMC);
            if(this._type == 2)
            {
               _loc1_ = uint(Math.random() * 6);
               this.attackMC.x = this._apArr[_loc1_][0];
               this.attackMC.y = this._apArr[_loc1_][1];
               this._click_mc.x = this.attackMC.x - 20;
               this._click_mc.y = this.attackMC.y - 20;
               this._hit_mc.x = this.attackMC.x - 30;
               this._hit_mc.y = this.attackMC.y + 30;
            }
            this.attackMC.gotoAndPlay(2);
         }
         else if(this.flag == this.STONE)
         {
            this.estradeMC.addChild(this.stoneMC);
            this.stoneMC.gotoAndPlay(2);
         }
      }
      
      private function onNoteGetItem(param1:SocketEvent) : void
      {
         var _loc6_:BasePeoleModel = null;
         var _loc7_:TimerExt = null;
         var _loc8_:String = null;
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:uint = _loc2_.readUnsignedInt();
         var _loc5_:uint = _loc2_.readUnsignedInt();
         DebugTrace.show("-------------------------",_loc3_,_loc4_,_loc5_);
         if(_loc4_ != this.NONE)
         {
            this._click_mc.mouseEnabled = false;
         }
         DisplayUtil.removeForParent(this.attackMC,false);
         DisplayUtil.removeForParent(this.stoneMC,false);
         if(_loc4_ == this.ATTACK)
         {
            if(_loc6_ = UserManager.getUserModel(_loc3_))
            {
               TweenLite.to(_loc6_.skeleton.getSkeletonMC(),2,{
                  "scaleX":1.5,
                  "scaleY":1.5
               });
               if(!this.timerMap.containsKey(_loc6_))
               {
                  _loc7_ = new TimerExt(_loc6_);
                  this.timerMap.add(_loc6_,_loc7_);
               }
               else
               {
                  _loc7_ = this.timerMap.getValue(_loc6_);
               }
               _loc7_.start(_loc5_);
            }
         }
         else if(_loc4_ == this.STONE && _loc3_ == MainManager.actorID)
         {
            _loc8_ = String(ItemXMLInfo.getName(400035));
            ItemInBagAlert.show(400035,TextFormatUtil.getRedTxt(_loc8_) + "已经放入了你的储存箱");
         }
      }
      
      public function destroy() : void
      {
         var _loc1_:TimerExt = null;
         for each(_loc1_ in this.timerMap.getValues())
         {
            _loc1_.destroy();
         }
         this.timerMap.clear();
         this.timerMap = null;
         SocketConnection.removeCmdListener(CommandID.TEAM_PK_ACTIVE,this.onPKActive);
         SocketConnection.removeCmdListener(CommandID.TEAM_PK_ACTIVE_NOTE_GET_ITEM,this.onNoteGetItem);
      }
   }
}

import com.robot.core.mode.BasePeoleModel;
import flash.display.MovieClip;
import flash.events.TimerEvent;
import flash.utils.Timer;
import gs.TweenLite;
import org.taomee.utils.DisplayUtil;

class TimerExt
{
    
   
   private var p:BasePeoleModel;
   
   private var timer:Timer;
   
   private var flashMC:MovieClip;
   
   public function TimerExt(param1:BasePeoleModel)
   {
      super();
      this.p = param1;
      this.flashMC = new pk_flash_mc();
   }
   
   public function start(param1:uint) : void
   {
      if(this.p)
      {
         this.p.addChild(this.flashMC);
      }
      if(this.timer)
      {
         this.timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
      }
      this.timer = new Timer(param1 * 1000,1);
      this.timer.addEventListener(TimerEvent.TIMER,this.onTimer);
      this.timer.start();
   }
   
   public function destroy() : void
   {
      if(this.p)
      {
         try
         {
            TweenLite.to(this.p.skeleton.getSkeletonMC(),2,{
               "scaleX":1,
               "scaleY":1
            });
         }
         catch(e:Error)
         {
         }
      }
      if(this.timer)
      {
         this.timer.stop();
         this.timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this.timer = null;
      }
      DisplayUtil.removeForParent(this.flashMC,false);
   }
   
   private function onTimer(param1:TimerEvent) : void
   {
      if(this.p)
      {
         try
         {
            TweenLite.to(this.p.skeleton.getSkeletonMC(),2,{
               "scaleX":1,
               "scaleY":1
            });
         }
         catch(e:Error)
         {
         }
         DisplayUtil.removeForParent(this.flashMC,false);
      }
   }
}
