package com.robot.app.petUpdate.updatePanel
{
   import com.robot.app.sceneInteraction.RoomPetManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.update.UpdatePropInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SingleExpItem extends Sprite
   {
       
      
      public var mc:MovieClip;
      
      private var _info:UpdatePropInfo;
      
      private var evStrArray:Array;
      
      public function SingleExpItem()
      {
         this.evStrArray = ["攻击学习力","防御学习力","特攻学习力","特防学习力","速度学习力","体力学习力"];
         super();
         this.mc = UIManager.getMovieClip("ui_Single_Exp_Item");
         addChild(this.mc);
      }
      
      public function set info(param1:UpdatePropInfo) : void
      {
         var a:String;
         var b:String;
         var array:Array;
         var petInfo:PetInfo = null;
         var str:String = null;
         var evStr:String = null;
         var v:UpdatePropInfo = param1;
         this._info = v;
         petInfo = PetManager.getPetInfo(v.catchTime);
         ResourceManager.getResource(ClientConfig.getPetHeadPath(v.id,v.catchTime),this.onLoadComp);
         a = String(v.exp - petInfo.exp);
         b = String(v.nextLvExp - v.exp);
         if(RoomPetManager._isRoomFight)
         {
            str = "【" + PetXMLInfo.getName(v.id) + "】获得经验:<font color=\'#ffff00\'>" + a + "（40%基地加成）</font>，离升级还需经验:<font color=\'#ffff00\'>" + b + "</font>，";
         }
         else
         {
            str = "【" + PetXMLInfo.getName(v.id) + "】获得经验:<font color=\'#ffff00\'>" + a + "</font>，离升级还需经验:<font color=\'#ffff00\'>" + b + "</font>，";
         }
         evStr = "";
         array = [v.ev_a,v.ev_d,v.ev_sa,v.ev_sd,v.ev_sp,v.ev_hp];
         array.forEach(function(param1:uint, param2:int, param3:Array):void
         {
            if(param1 - petInfo.evArray[param2] > 0)
            {
               evStr += evStrArray[param2] + "增加了<font color=\'#ffff00\'>" + (param1 - petInfo.evArray[param2]) + "</font>点，";
            }
         });
         str = str = str + evStr;
         str = str.substring(0,str.length - 2);
         this.mc["txt"].htmlText = str;
      }
      
      public function get info() : UpdatePropInfo
      {
         return this._info;
      }
      
      public function destroy() : void
      {
         DisplayUtil.removeForParent(this);
         this._info = null;
         this.mc = null;
      }
      
      private function onLoadComp(param1:DisplayObject) : void
      {
         DisplayUtil.removeAllChild(this.mc["iconMC"]);
         var _loc2_:MovieClip = param1 as MovieClip;
         _loc2_.scaleX = _loc2_.scaleY = 1;
         var _loc3_:Bitmap = DisplayUtil.copyDisplayAsBmp(_loc2_);
         this.mc["iconMC"].addChild(_loc3_);
         _loc2_ = null;
      }
   }
}
