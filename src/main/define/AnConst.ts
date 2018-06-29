class AnConst
{
	public static UP:number = 1;
	public static RIGHT_UP:number = 2;
	public static RIGHT:number = 3;
	public static RIGHT_DOWN:number = 4;
	public static DOWN:number = 5;
	public static LEFT_DOWN:number = 6;
	public static LEFT:number = 7;
	public static LEFT_UP:number = 8;
	
	public static STAND:number = 0; //站立
	public static WALK:number = 1; //走动
	public static ATTACK:number = 2; //攻击
	public static INJURY:number = 3; //受伤
	public static DEATH:number = 4; //死亡
	public static REST:number = 5; //休息
	
	/**反方向**/
	public static TURN_DIR:Object = {2: AnConst.LEFT_UP, 3: AnConst.LEFT, 4: AnConst.LEFT_DOWN, 6: AnConst.RIGHT_DOWN, 7: AnConst.RIGHT, 8: AnConst.RIGHT_UP};
	
	/**缺少方向映射**/
	public static DIRS_MAPPING:Object = {7: 8, 8: 7, 1: 8, 6: 5, 5: 6, 2: 3, 3: 2, 4: 5};
	
}
